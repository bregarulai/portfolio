import React from "react";
import {
  Skill,
  SkillIcon,
  SkillList,
  SkillsHeading,
  SkillsSection,
  SkillTitle,
} from "./skills.elements";
import {
  DiCss3Full,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiJava,
  DiGit,
  DiPostgresql,
  DiHtml5,
} from "react-icons/di";

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsHeading>skills</SkillsHeading>
      <SkillList>
        <Skill>
          <SkillIcon>
            <DiHtml5 />
          </SkillIcon>
          <SkillTitle>HTML5</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiCss3Full />
          </SkillIcon>
          <SkillTitle>CSS</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiJavascript />
          </SkillIcon>
          <SkillTitle>Javascript</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiReact />
          </SkillIcon>
          <SkillTitle>React</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiNodejsSmall />
          </SkillIcon>
          <SkillTitle>Node.js</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiJava />
          </SkillIcon>
          <SkillTitle>Java</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiGit />
          </SkillIcon>
          <SkillTitle>Git</SkillTitle>
        </Skill>
        <Skill>
          <SkillIcon>
            <DiPostgresql />
          </SkillIcon>
          <SkillTitle>SQL</SkillTitle>
        </Skill>
      </SkillList>
    </SkillsSection>
  );
};

export default Skills;
