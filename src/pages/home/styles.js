import styled from "styled-components";

export const Container = styled.div`
  h1 {
    align-items: center;
    margin: 4rem 0;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax (200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
{
    display: flex;
    flex-direction: column;
    align-items: center;

}

img{
    width: 180px;
    border-radius: 1rem
    margin-bottom: 2rem;

}

span{
    font-weight: bold;
    fort-size: 120px;
    text-align: center;
}
a{
    transition; all 0.3s;
}
a:hover{
    tarnsform: scale(1.1);
}

`;
