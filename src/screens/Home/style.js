import styled from "styled-components/native";

// export const ScrollForm = styled.ScrollView`
//   height: 80%;
//   background-color:red;
//  `

export const ContainerForm = styled.SafeAreaView`
  /* padding: 35px; */
  width:75%;
  /* height:30px; */
  /* background-color:gray; */
  gap:10px;
`
export const BoxsContainer = styled.View`
  flex-direction: row;
  width:100%;
  justify-content: space-between;
`

export const ScrollForm = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }  
}))`
  padding-top:20px;
`




