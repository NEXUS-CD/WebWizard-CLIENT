/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-11 13:46:00
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 首页
 */
import Collapse from '@/components/collapse/base';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import styles from './index.less';

export default () => {
  const items = [
    {
      key: '1',
      // 需求，点击时变色，那将header原本的样式取消，自己添加标签完成
      label: '01. 是否参与网站开发，就能写上名字',
      content: (
        <div>
          当你决定加入我们，共同开发时，我们会为你分配合适的任务，
          当你完成任务，并提交后，由我们的人员进行审核，审核通过后，
          你就能出现在我们的网站上了！
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '2',
      label: '02. 网站里嵌套了chatgpt,是可以免费使用的吗？',
      content: (
        <div>
          目前集成的chatgpt是3.5版本的，但是需要使用自己的key来进行访问；
          后续我们会推出3.5plus或者4.0版本，但是可能会收取一定的费用，因为成本问题,详见chat官网收费标准，具体还在规划中。
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '3',
      label: '03. 网站的意义',
      content: (
        <div>
          1.打造学习氛围，分享学习资料。
          <br />
          <br />
          2.互相代码review，优化你的逻辑思维，纠正你的错误习惯，养成良好代码规范等。
          <br />
          <br />
          3.开拓眼界。
          <br />
          <br />
          4.一直想做的技术难点，通过本网站实现。
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '4',
      label:
        '04. 对于资料分享我为什么不放到掘金等其他网站呢？或者是我要学习为什么不访问这些网站呢？',
      content: (
        <div>
          1.打造学习氛围，分享学习资料。
          <br />
          <br />
          1.此等网站大多数鱼龙混杂，学习资料质量参差不齐。你需要手动的去过滤，消耗时间，而我们会对质量进行把控。
          <br />
          <br />
          2.因为我们对资料进行分类整理，并搭配搜索语法，你可以搜索到你想要的文章，可以随时接收到前沿技术避免自己的技术落后。
          <br />
          <br />
          3.我们还推出了知识接力，不管是生活层面还是技术层面。你可以看到更多人解决问题的逻辑思维，从而破开自己的思维局限性。
          <br />
          <br />
          4.这里的资料主要是为了大家能学到东西，而不是为了分享而分享。
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '5',
      label:
        '05. 项目技术组成，前端为什么选择微前端umi4+vue3，后端为什么选择node+go。',
      content: (
        <div>
          1.这个网站主打的就是学习，所以考虑到大多数人的感受。也为了大家能够写上自己喜欢的代码，所以我们进行了这样的选择。虽然这样会极大的提升未来的维护，但是这些都是有意义的。
          <br />
          <br />
          2.另外一个方面，我们希望大家对各个语言都有了解，这样也能够提升大家在职场的竞争力。
          <br />
          <br />
          3.保持网站的唯一性、特殊性，我们的网站会是独一无二的网站。
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '6',
      label: '06. 如果我是萌新，什么都不会，但是想加入怎么办呢？',
      content: (
        <div>
          如果你是萌新，在我们的网站里，有个资料板块，里面有各种各样的资料，供你参考，
          帮助你对一门语言进行学习，并能快速的搭建自己的项目，同时团队里的人也会努力解决你的疑问。
        </div>
      ),
      classActivate: 'item-activate',
    },
    {
      key: '7',
      label: '07. 如果我技术不是很好，但是我想参与开发怎么办？',
      content: (
        <div>
          1.如果你技术不好，那我们更加推荐你参与开发。这个相当于是提供给你练手的平台，并且我们有代码review，所以不用担心代码质量问题，大家会对你的代码进行审核，纠正你的错误。
          <br />
          <br />
          2.同时我也有点社恐怎么办。那我们的建议是，你也进行参与开发。因为技术略差+社恐，始终是自己需要克服的一大难关，同时我们并不会嘲笑你的代码，也不允许有人嘲笑，大可放心。
          <br />
          <br />
          3.加入我们，一起成长吧！
        </div>
      ),
      classActivate: 'item-activate',
    },
  ];
  return (
    <Row
      className={styles.doubtfulSuggestionBody}
      id="doubtfulSuggestion"
      justify="space-between"
    >
      <Col className={styles['doubtfulSuggestionBody-leftBox']}>
        <h2>疑惑、建议和意见</h2>
        <Button
          type="primary"
          className={styles['doubtfulSuggestionBody-leftBox-button']}
        >
          去提出
        </Button>
      </Col>
      <Col className={styles['doubtfulSuggestionBody-rightBox']}>
        <Collapse
          mainClass={styles['doubtfulSuggestionBody-rightBox-collapseBox']}
          items={items}
          icon={{
            expandIcon: [<MinusOutlined key="0" />, <PlusOutlined key="1" />],
          }}
        />
      </Col>
    </Row>
  );
};
