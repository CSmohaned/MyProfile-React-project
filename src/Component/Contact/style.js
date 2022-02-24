import styled from 'styled-components';
export const Drop = styled.div`
padding: 50px 0;
text-align: center
`
export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:575px) {
            font-size: 40px
        }
`
export const DropTitleS = styled.span`
font-weight: normal
`
export const Form = styled.form`
width: 70%;
margin: auto;
@media (max-width:575px) {
    width: 100%
}
`
export const Input1 = styled.input`
box-sizing: border-box;
outline: 0;
padding: 5px;
margin-bottom: 10px;
@media (max-width:575px) {
    width: 100%
}
`
export const FoIrmInput = styled.div`
overflow: hidden;
`
export const Input3 = styled(Input1)`
float: left
width: 49%;
`
export const Input4 = styled(Input1)`
float: right
width: 49%;
`
export const Input5 = styled(Input1)`
width: 100%;
`

export const DTextarea = styled.textarea`
width: 100%;
outline: 0;
background: #ccc
`
export const Input6 = styled(Input1)`
width: 60%;
background: #fff;
border: 1px solid #ccc;
color: #888;
cursor: pointer
`

