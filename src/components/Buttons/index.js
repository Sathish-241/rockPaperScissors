import {ListItem, CustomButton, CustomImg} from '../../styledComponent'

const Buttons = props => {
  const {choiceData, getYourChoice} = props
  const {id, imageUrl} = choiceData
  const testId = `${id.toLowerCase()}Button`
  console.log(testId)
  const onGetYourChoice = () => {
    getYourChoice(id)
  }

  return (
    <ListItem>
      <CustomButton
        type="button"
        border="none"
        bgColor="transparent"
        onClick={onGetYourChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <CustomImg src={imageUrl} alt={id} height="250" width="250" />
      </CustomButton>
    </ListItem>
  )
}
export default Buttons
