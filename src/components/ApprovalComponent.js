import React from 'react'

const ApprovalComponent = (props) => {
  const approved = props.approved;
  if(approved === null) {
    return <p></p>;
  } else {
    if (approved) {
      return <h4> Yay approved! </h4>
    } else {
      return <h4>Not approved!</h4>
    }
  }
};

export default ApprovalComponent