import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  &.fade-in {
    opacity: 1;
    transition: opacity ease 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity ease 0.10s;
  }
  @keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
  .background {
    background: rgba(0,0,0,.33);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    position: absolute;
    top:0;
    right:0;
    z-index: 1050;
    box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box-title {
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .x-close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: black;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`

export default Modal;
