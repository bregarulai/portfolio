import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 4rem 5rem;
`;

export const SkillsHeading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: #424242;
  margin-bottom: 2rem;
  text-align: center;
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
  padding-bottom: 1rem;
  border-left: 3px solid #1de9b6;
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
`;
