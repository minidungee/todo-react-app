import React from "react"

import { TextField, Paper, Button, Grid } from "@material-ui/core"

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.add = props.add;
    this.state = { item: {title:"" }}
  }

  onInputChange = (e) => {
    //state.title에 입력한 내용을 대입
    const thisItem = this.state.item
    thisItem.title = e.target.value
    this.setState({item:thisItem})
    console.log(this.state.item.title)
  }

  onButtonClick = (e) => {
    //배열에 데이터를 삽입하는 함수를 호출
    this.add(this.state.item);
    this.setState({item:{title:""}})
  }
  enterKeyEventHandler = (e) => {
    if(e.key === "Enter"){
      this.onButtonClick()
    }
  }

  render() {
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="여기에 작성하시오!!!" fullWidth
            onChange={this.onInputChange} value={this.state.item.title} 
            onKeyPress={this.enterKeyEventHandler}/>
          </Grid>
          <Grid xs={1} md={1} item>
            <Button fullWidth color="secondary" onClick={this.onButtonClick}>
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>

    )
  }
}

export default AddToDo