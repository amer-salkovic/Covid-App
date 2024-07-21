// AboutUs.jsx
import React from "react"

import { CardContent } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookIcon from '@mui/icons-material/Facebook'; // Import ikonice za Facebook
import InstagramIcon from '@mui/icons-material/Instagram'; 


import {
  StyledCard,
  StyledCardMedia,
  StyledGrid,
  StyledTypographyName,
  StyledTypographyCity,
  LineDiv,
  StyledGitHubLink,
  StyledTypographyDescription,
  StyledFacebookLink,
  StyledInstagramLink
} from "./AboutStyled"

const creators = [
  {
    name: "Amer Salković",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Amer work's in center NIT as a Web developer",
    image: "amerS.jpg",
    
    github: "https://github.com/amer-salkovic",
    facebook: "https://www.facebook.com/",
  },
  {
    name: "Faris Pepić",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Faris work's in center NIT as a Web developer",
    image:
    "farisP.jpeg",
    github: "https://github.com/Faris993",
    facebook: "https://www.facebook.com/",
    
  },
  {
    name: "Enes Korać",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Enes work's in center NIT as a Web developer",
    image:
      "enesK.jpeg",
    github: "https://github.com/ErminMuslic",
    facebook: "https://www.facebook.com/",
  },

  {
    name: "Ajtana Đerlek",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Ajtana work's in center NIT as a Web developer",
    image:
      "ajtanaDj.jpg",
    github: "https://github.com/AjtanaDjerlek",
    facebook: "https://www.facebook.com/",
  },
]

export const About = () => {
  return (
    <StyledGrid container>
      {creators.map((creator, index) => (
        <StyledCard key={index}>
          <StyledCardMedia
            component="img"
            alt={creator.name}
            src={`src/Components/About/${creator.image}`}
          />
          <CardContent>
            <StyledTypographyName gutterBottom variant="h1">
              {creator.name}
            </StyledTypographyName>
            <StyledTypographyCity gutterBottom variant="h6">
              {creator.city}
            </StyledTypographyCity>
            <LineDiv />

            <StyledTypographyDescription variant="body2" color="text.secondary">
              {creator.description}
            </StyledTypographyDescription>
            <StyledFacebookLink href={creator.facebook} target="_blank">
                <FacebookIcon />
              </StyledFacebookLink>
            <StyledGitHubLink href={creator.github} target="_blank">
              <GitHubIcon />
            </StyledGitHubLink>
            <StyledInstagramLink href={creator.instagram} target="_blank">
                  <InstagramIcon />
                </StyledInstagramLink>
          </CardContent>
        </StyledCard>
      ))}
    </StyledGrid>
  )
}

