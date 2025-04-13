import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  
  .extra-560, .extra-425 {
    display: none;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 15px;
    
    .title-line {
      height: 40px !important;
    }
  }
  
  @media (max-width: 560px) {
    .extra-560 {
      display: flex;
    }
  }
  
  @media (max-width: 425px) {
    .extra-425 {
      display: flex;
    }
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 12px;
    
    .title-line {
      height: 35px !important;
    }
    
    .title-line:nth-child(3) {
      width: 70% !important;
    }
  }
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
  
  .extra-560 {
    display: none;
  }
  
  @media (max-width: 768px) {
    gap: 4px;
    margin-bottom: 8px;
    
    .subtitle-line {
      height: 27px !important;
    }
  }
  
  @media (max-width: 560px) {
    .extra-560 {
      display: flex;
    }
  }
  
  @media (max-width: 480px) {
    .subtitle-line {
      height: 22px !important;
    }
    
    .subtitle-line:nth-child(2) {
      width: 60% !important;
    }
  }
`

export const DateContainer = styled.div`
  margin-bottom: 10px;
  
  .extra-560 {
    display: none;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 8px;
    
    .date-line {
      height: 22px !important;
    }
  }
  
  @media (max-width: 560px) {
    .extra-560 {
      display: flex;
      margin-top: 5px;
    }
  }
  
  @media (max-width: 480px) {
    .date-line {
      height: 18px !important;
    }
  }
`

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
    
    .image-skeleton {
      height: 300px !important;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 12px;
    
    .image-skeleton {
      height: 200px !important;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    gap: 9px;
    margin-bottom: 25px;
    
    .content-line {
      height: 22px !important;
    }
  }
  
  @media (max-width: 480px) {
    gap: 7px;
    margin-bottom: 20px;
    
    .content-line {
      height: 18px !important;
    }
    
    .content-line:nth-last-child(-n+4) {
      display: none;
    }
    
    .content-line:last-child {
      display: flex;
      width: 70% !important;
    }
  }
`
