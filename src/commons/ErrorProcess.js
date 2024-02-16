import React, { Component } from 'react';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('./pages/ErrorPage'));

class ErrorProcess extends Component {
  state = {
    message: '',
  };

  //에러발생하면 여기로 유입
  componentDidCatch(error, info) {
    this.setState({
      message: error.message,
    });

    console.error({ error, info });
  }
  //메시지가 있으면 메시지 출력 (비구조화 할당)
  render() {
    const { message } = this.state;
    //일반적인 사항은 다 this.props.children이 노출,
    return message ? <ErrorPage>{message}</ErrorPage> : this.props.children; //children: 컴포넌트 안쪽의 내용들
  }
}

export default React.memo(ErrorProcess);
