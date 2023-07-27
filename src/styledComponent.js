import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  font-family: Roboto;
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: 50px;
`
export const CustomContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${props => props.bgColor};
  font-family: Roboto;
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  border: ${props => props.border}px;
  border-style: ${props => props.borderStyle};
  border-radius: ${props => props.borderRadius}px;
  border-color: ${props => props.borderColor};
  padding: ${props => props.padding}px;
  flex-wrap: ${props => props.flexWrap};
  margin-top: ${props => props.marginTop}px;
  align-self: ${props => props.alignSelf};
  padding-top: ${props => props.paddingTop}px;
  padding-bottom: ${props => props.paddingBottom}px;
`
export const HeadingText = styled.h1`
  color: ${props => props.color};
  width: ${props => props.width}px;
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
`
export const TextContent = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`

export const CustomButton = styled.button`
  border: ${props => props.border};
  background-color: ${props => props.bgColor};
  cursor: pointer;
  align-self: ${props => props.alignSelf};
  margin: 10px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius}px;
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;
`
export const CustomImg = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  src: ${props => props.src};
  alt: ${props => props.alt};
`
