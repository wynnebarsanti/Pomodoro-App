import React from 'react';

class Profile extends React.Component {

render(){
    console.log(this.props.userData);
    return(
        <div>
            Got to profile
        </div>
    )
}
}

export default Profile;