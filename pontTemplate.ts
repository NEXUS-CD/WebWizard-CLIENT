/*
 * @file dataEntry: 标题
 * @Author : zhangwc
 * @type : 文件类型
 * @Date : 2022-01-21 23:39:52
 * @notes : 备注说明注意事项等
 * @lists : 内容概览
 */

import {
  CodeGenerator,
  Interface,
  FileStructures as OriginFileStructures,
} from 'pont-engine';
export interface FileStructure {
  [filePath: string]: FileStructure | (() => string) | string;
}
export enum Surrounding {
  typeScript = 'typeScript',
  javaScript = 'javaScript',
}
type TSurrounding = 'typeScript' | 'javaScript';
export enum SurroundingFileName {
  javaScript = 'js',
  typeScript = 'ts',
}
const keywords = ['export'];
/** 获取文件名名称 */
export function getFileName(fileName: string, surrounding: TSurrounding) {
  const isInvalidSurrounding = Surrounding[surrounding];

  if (isInvalidSurrounding) {
    return `${fileName}.${SurroundingFileName[isInvalidSurrounding]}`;
  }

  return `${fileName}.ts`;
}
export function reviseModName(modName: string) {
  // .replace(/\//g, '.').replace(/^\../, '').replace(/\../g, '_') 转换 / .为下划线
  // exp: /api/v1/users => api_v1_users
  // exp: api.v1.users => api_v1_users

  return modName.replace(/\//g, '.').replace(/^\../, '').replace(/\./g, '_');
}
// params 扁平化
// export const flatteningParams = (paramsCode: string) => {
//   // 正则得到 class类型 列 username: string; password: string; }
//   paramsCode = paramsCode
//     .replace(/([\w\W]*?)Params {/, '')
//     .replace(/\/\*\*([\w\W]*?)\*\//g, '')
//     .replace(/\n/g, '')
//     .trim();
//   if (paramsCode.length === 1) {
//     return '';
//   }
//   return paramsCode.slice(0, paramsCode.lastIndexOf('}')).replace(/;/g, ',');
// };
// 首字母大写
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//params转为Object
const getParamsObject = (paramsCode: string) => {
  paramsCode = paramsCode.replace(/\?/g, '');
  try {
    return JSON.parse(
      (paramsCode = paramsCode
        .replace(/\/\*\*([\w\W]*?)\*\//g, '')
        .replace(/\s*/g, '')
        .replace(/([\w\W]*?)classParams{/, '{')
        .replace(/\:([A-Za-z0-9_<>\.\|\&\']*?)\;/g, (_, matchTheChild) => {
          return matchTheChild ? `:"${matchTheChild}",` : matchTheChild;
        })
        .replace(/([A-Za-z0-9_]*?)\:/g, (_, matchTheChild) => {
          return matchTheChild ? `"${matchTheChild}":` : matchTheChild;
        })
        .replace(/,(})/g, (_, matchTheChild) => {
          return matchTheChild;
        })
        .replace(/;/g, ',')),
    );
  } catch (err) {
    throw `${err} ${paramsCode}`;
  }
};
// 返回一个去除Params包含路由传参的params
const filterParamsPath = (paramsCode: string, paths: Array<string>) => {
  let paramsKey = Object.keys(getParamsObject(paramsCode));
  paths.forEach((pathsItem) => {
    const paramsKeyIndex = paramsKey.indexOf(pathsItem.replace(/{|}/g, ''));

    if (paramsKeyIndex !== -1) {
      paramsKey.splice(paramsKeyIndex, 1);
    }
  });

  return paramsKey;
};
// 获取当前params注释
const getDeclaration = (paramsCode: string) => {
  const paramsObj = getParamsObject(paramsCode);
  const paramsArrar = Object.keys(paramsObj);
  const declaration = paramsCode
    .replace(/([\w\W]*?)Params {/, '')
    .match(/\/\*\*([\w\W]*?)\*\//g);
  return (
    declaration?.reduce(
      (previousValue: string, currentValue: string, currentIndex: number) => {
        return (
          previousValue +
          `* @param ${paramsArrar[currentIndex]} {${
            paramsObj[paramsArrar[currentIndex]]
          }} ${currentValue.match(/\/\*\*([\w\W]*?)\*\//)?.[1]} ${
            declaration.length - 1 !== currentIndex ? '\n' : ''
          }`
        );
      },
      '',
    ) || ''
  );
};

/**
 * @desc 获取请求的URL
 */
export default class MyGenerator extends CodeGenerator {
  /** 重写pont的生成网络请求方法 */
  getInterfaceContent(inter: Interface) {
    const urlParams = inter.path.match(/\{[\w]*?\}/g) || [];
    let urlString = inter.path?.replace(/\{([\w]*)\}/, (_, cur) => {
      return '${params.' + cur + '}';
    });
    // url /a/asd/{asd}/asd 返回["asd"]
    //    const pathSum= inter.path.match(/\{([\w]*)\}/g)?.map(function(item) { return item.replace(/\{|\}/g, ''); })
    const paramsCode = inter.getParamsCode('Params'); //params参数的数据类型
    const paramsName = `I${
      inter.name.substring(0, 1).toUpperCase() +
      inter.name.substring(1, inter.name.length)
    }Params`;
    const Interfaces = paramsCode
      ?.replace(/class/, 'interface')
      ?.replace(/Params/, paramsName); //将class改成ts的接口 并且将Parms更改名字
    const { method } = inter; //请求类型:get、post....
    const description = inter.description?.replace(/(\n|\s)/g, ''); //生成描述
    // 判断参数是否可选
    // inter.parameters 是一个数组，获取的是参数信息 一旦有一个参数为必传，那么params 就为必传
    const isRequired = inter.parameters.some((item) => item.required)
      ? ''
      : '?';

    const bodyParams = inter.getBodyParamsCode(); //body参数的类型
    console.log(
      inter.name,
      inter.response?.typeArgs.some((item) => item.isDefsType) ||
        inter.response.isDefsType,
      inter.response.typeArgs,
      inter.response.isDefsType,
    );
    // const isResData =
    //   inter.response?.typeArgs.some((item) => item.isDefsType) ||
    //   inter.response.isDefsType;
    let sum = JSON.stringify(paramsCode).split(':').length - 1;
    const paramsDeslaration = getDeclaration(paramsCode);
    // string类型的params转为obj
    const paramsToObject = getParamsObject(paramsCode);

    const paramsToObjectLength = Object.keys(paramsToObject).length;
    const filterParamsPathArr = filterParamsPath(paramsCode, urlParams);

    const filterParamsPathKey = filterParamsPathArr
      .join(',')
      ?.replace(new RegExp(keywords.join('|'), 'g'), (cur) => `${cur}:_${cur}`);
    // 生成请求参数代码
    const Params = `
    {method:"${method}",${bodyParams && 'data,'}${
      filterParamsPathKey.length
        ? `params${
            paramsToObjectLength - filterParamsPathArr.length &&
            filterParamsPathArr.length
              ? ':omitObject(params)'
              : ''
          },
    \n...options
    `
        : '\n...options'
    }
    }`;
    const err =
      '`' +
      ` 请求地址: ${'/api/v1' + urlString + ''},请求参数: $` +
      `{JSON.stringify(${Params})} msg: $` +
      '{res?.msg}`';
    return `
    $$ 
    import request from '@/utils/request';
    $$

    export ${Interfaces}
    /*
    * @description ${description}
    * @name ${inter.name}${paramsDeslaration ? `\n${paramsDeslaration}` : ''}${
      bodyParams ? `\n * @param data {${bodyParams}} data` : ''
    }
    */
    export const ${inter.name}= async function (
    ${sum ? `params:I${capitalizeFirstLetter(inter.name)}Params,` : ''}${
      bodyParams ? `\n data${isRequired}:` + `${bodyParams},` : ''
    }
    options:object={}
    ):Promise<${inter.responseType}> {
    const res =await request(${'`/api/v1' + urlString + '`'},\n ${Params});
    if (res?.code !== 0) {
    throw ${err};
    }
    return res
    }
    `;
  }
  /** 重写pont的request方法 */
  getInterfaceContentInDeclaration() {
    // 由于抛弃API链式调用方法，现在不需要request方法所以置空
    return '';
  }
}
export class FileStructures extends OriginFileStructures {
  /** 获取单个数据源的文件结构 */
  getOriginFileStructures(
    generator: CodeGenerator,
    usingMultipleOrigins = false,
  ): any {
    let mods: { [key: string]: any } = {};
    const dataSource = generator.dataSource;
    let templateString = (MyGenerator as any)
      .toString()
      ?.match(/\$\$\s([\w\W]*)\s\$\$/)?.[1];
    console.log(generator.getDeclaration());
    dataSource.mods.forEach((mod) => {
      // const currMod = {};
      let nrString = '';
      mod.interfaces.forEach((inter) => {
        nrString += `${generator.getInterfaceContent.bind(
          generator,
          inter,
        )()} \n`.replace(/\$\$([\w\W]*?)\$\$/, '');
        // currMod[
        // getFileName(inter.name, this?.surrounding || Surrounding.typeScript)
        // ] = generator.getInterfaceContent.bind(generator, inter);
        // currMod[indexFileName] = generator.getModIndex.bind(generator, mod);
      });
      const modName = reviseModName(mod.name);
      // mods[modName] = currMod;
      // 判断当前文件是否引用omitObject,有则顶部添加依赖
      if (nrString.includes('omitObject(')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        templateString + "import { omitObject } from '@/utils/tools';";
      }
      mods[
        getFileName(
          modName,
          (this as any)?.surrounding || Surrounding.typeScript,
        )
      ] = `${templateString}\n${nrString}`;
      // mods[indexFileName] = generator.getModsIndex.bind(generator);
    });

    if (!generator.hasContextBund) {
      generator.getBaseClassesInDeclaration =
        this.getBaseClassesInDeclaration.bind(
          this,
          generator.getBaseClassesInDeclaration.bind(generator),
          usingMultipleOrigins,
        );
      generator.getModsDeclaration = this.getModsDeclaration.bind(
        this,
        generator.getModsDeclaration.bind(generator),
        usingMultipleOrigins,
      );
      generator.hasContextBund = true;
    }

    const fileStructures = {
      [getFileName(
        'baseClass',
        (this as any)?.surrounding || Surrounding.typeScript,
      )]: generator.getBaseClassesIndex.bind(generator),
      mods: mods,
      // [indexFileName]: generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator),
    };
    if (this.spiltApiLock && usingMultipleOrigins) {
      fileStructures[generator.lockFilename] = this.getLockContent(
        generator,
      ) as any;
    } else if (!usingMultipleOrigins) {
      fileStructures[generator.lockFilename] = this.getLockContent() as any;
    }
    return fileStructures;
  }
}
