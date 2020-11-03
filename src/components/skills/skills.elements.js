import styled from "styled-components/macro";

export const SkillsSection = styled.section`
  padding: 5rem 5rem;

  @media only screen and (max-width: 720px) {
    padding: 5rem 3rem;
  }
`;

export const SkillsHeading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: #424242;
  margin-bottom: 2rem;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  padding: 1rem;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);
  padding: 0.75rem 0 2rem 0;
  border-left: 3px solid #1de9b6;
  border-radius: 5px;

  &:hover {
    transition: transform 0.25s ease-in-out;
    transform: translateY(-10px);
  }
`;

export const SkillIcon = styled.div`
  color: #1de9b6;
  font-size: 6rem;
  align-self: center;
`;

export const SkillTitle = styled.p`
  font-size: 1.2rem;
  margin-top: -2rem;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 1.1rem;
  }
`;
