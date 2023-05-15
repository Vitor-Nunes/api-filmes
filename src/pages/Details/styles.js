import styled from "styled-components";

export const Container = styled.div`
h1{
  margin: 3 rem 0;
}

.movie{
  display: flex;
  align-items: center
  justify-content: center;
}

img{
  width: 300px;
  border-radius: 1rem;
 }

 .details{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  margin-top: 4.5rem;
  max-width: 50%
 }

 button{
  background: #6654ad;
  border:none;
  cursor: pointer;
  border-radius:  1rem;
  color: white;
  padding: 0,8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;
  width: 90px;
  height: 40px;
}

button:hover{
  background: #483D8B;
}

span{
  line-height: 130%
  margin-bottom: 1rem;
  font-size: 110%

}

h2{
  margin: 8px 0 0;
  opacity: 0.5;
  font-size: 1rem;
}
`;
