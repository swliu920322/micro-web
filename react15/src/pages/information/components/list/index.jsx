import React from "react";
import "./index.scss";
import axios from "axios";
// 列表元素
import InformationItem from "../item/index.jsx";

// 分页组件
import InformationPagination from "../pagination/index.jsx";

class InformationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      limit: 10,
      total: 200,
    };
  }

  setPage(page) {
    this.setState({
      page,
    });
  }

  componentDidMount() {
    let res = {
      list: [
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: true,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
        {
          img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg",
          title: "爱在大草原 吉利豪越的设计师一定是个暖男",
          number: "3026",
          type: "导购",
          status: false,
        },
      ],
      page: 1,
      limit: 10,
      total: 200,
    };
    const { list, page, limit, total } = res;
    this.setState({
      list,
      page,
      limit,
      total,
    });
  }

  render() {
    const { noPagination = false } = this.props;
    const { list, page, limit, total } = this.state;
    return (
      <div className="information-list-container">
        {list.map((item, index) => {
          return <InformationItem data={item} setItem={() => this.setItem()} />;
        })}

        {/* 分页组件 */}
        {noPagination ? (
          <div> </div>
        ) : (
          <InformationPagination
            data={{
              page,
              limit,
              total,
            }}
            setPage={(page) => this.setPage(page)}
          />
        )}
      </div>
    );
  }
}

export default InformationList;
