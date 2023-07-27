import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import {
  BgContainer,
  CustomContainer,
  HeadingText,
  TextContent,
  CustomButton,
  CustomImg,
} from './styledComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    showGameResultView: false,
    resultText: '',
    yourChoiceImgUrl: '',
    opponentChoiceImgUrl: '',
  }

  getResults = event => {
    const imgIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoiceImgUrl = choicesList[imgIndex].imageUrl
    const opponentId = choicesList[imgIndex].id
    const yourChoiceImgUrl = event.target.src
    const yourObject = choicesList.find(
      eachItem => eachItem.imageUrl === yourChoiceImgUrl,
    )
    const yourId = yourObject.id
    let result = ''
    // console.log(yourId)
    if (yourId === opponentId) {
      result = 'IT IS DRAW'
    } else if (
      (yourId === 'PAPER' && opponentId === 'ROCK') ||
      (yourId === 'ROCK' && opponentId === 'SCISSORS') ||
      (yourId === 'SCISSORS' && opponentId === 'PAPER')
    ) {
      result = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }

    this.setState({
      resultText: result,
      yourChoiceImgUrl,
      opponentChoiceImgUrl,
      showGameResultView: true,
    })
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <CustomContainer
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="2"
        borderStyle="solid"
        borderRadius="8"
        borderColor="white"
        padding="30"
        width="1500"
      >
        <HeadingText
          fontFamily="Bree Serif"
          color="white"
          width="150"
          fontWeight="500"
        >
          ROCK PAPER SCISSORS
        </HeadingText>
        <CustomContainer
          bgColor="white"
          border="none"
          borderRadius="8"
          height="180"
          width="200"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingTop="50"
          paddingBottom="25"
        >
          <TextContent
            color="#223a5f"
            fontFamily="Bree Serif"
            fontWeight="500"
            fontSize="24"
            lineHeight="5"
          >
            Score
          </TextContent>
          <TextContent
            color="#223a5f"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="42"
          >
            {score}
          </TextContent>
        </CustomContainer>
      </CustomContainer>
    )
  }

  renderButtons = () => (
    <CustomContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      marginTop="70"
      width="600"
    >
      <CustomButton
        border="none"
        bgColor="transparent"
        type="button"
        onClick={this.getResults}
        data-testid="rockButton"
      >
        <CustomImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          alt="ROCK"
          height="250"
          width="250"
        />
      </CustomButton>
      <CustomButton
        border="none"
        bgColor="transparent"
        type="button"
        onClick={this.getResults}
        data-testid="scissorsButton"
      >
        <CustomImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="SCISSORS"
          height="250"
          width="250"
        />
      </CustomButton>
      <CustomButton
        border="none"
        bgColor="transparent"
        type="button"
        onClick={this.getResults}
        data-testid="paperButton"
      >
        <CustomImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          height="250"
          width="250"
        />
      </CustomButton>
    </CustomContainer>
  )

  renderRules = () => (
    <CustomContainer alignSelf="flex-end">
      <Popup
        trigger={
          <CustomButton type="button" fontFamily="Bree Serif" border="none">
            Rules
          </CustomButton>
        }
        position="center center"
        modal
      >
        {close => (
          <CustomContainer
            //   height="600"
            //   width="600"
            bgColor="white"
            padding="20"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <CustomButton
              type="button"
              border="none"
              onClick={close}
              alignSelf="flex-end"
            >
              <RiCloseLine />
            </CustomButton>

            <CustomImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
              alt="rules"
            />
          </CustomContainer>
        )}
      </Popup>
    </CustomContainer>
  )

  playAgain = () => {
    this.setState({
      showGameResultView: false,
      yourChoiceImgUrl: '',
      opponentChoiceImgUrl: '',
    })
  }

  gameResultView = () => {
    const {yourChoiceImgUrl, opponentChoiceImgUrl, resultText} = this.state

    return (
      <CustomContainer
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="50"
      >
        <CustomContainer
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="600"
        >
          <CustomContainer
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <HeadingText color="white" fontFamily="Roboto" fontSize="26">
              YOU
            </HeadingText>
            <CustomImg
              src={yourChoiceImgUrl}
              alt="your choice"
              height="200"
              width="200"
            />
          </CustomContainer>
          <CustomContainer
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <HeadingText color="white" fontFamily="Roboto" fontSize="26">
              OPPONENT
            </HeadingText>
            <CustomImg
              src={opponentChoiceImgUrl}
              alt="opponent choice"
              height="200"
              width="200"
            />
          </CustomContainer>
        </CustomContainer>
        <TextContent color="white" fontWeight="500" fontSize="26">
          {resultText}
        </TextContent>
        <CustomButton
          type="button"
          bgColor="white"
          color="#223a5f"
          fontFamily="Bree Serif"
          border="none"
          borderRadius="8"
          height="40"
          width="100"
          onClick={this.playAgain}
        >
          PLAY AGAIN
        </CustomButton>
      </CustomContainer>
    )
  }

  render() {
    const {showGameResultView} = this.state
    return (
      <BgContainer
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Header score={score} /> */}
        {this.renderHeader()}
        {showGameResultView ? this.gameResultView() : this.renderButtons()}
        {showGameResultView ? '' : this.renderRules()}
      </BgContainer>
    )
  }
}

export default App
