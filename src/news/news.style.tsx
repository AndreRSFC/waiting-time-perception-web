import styled from 'styled-components'

export const NewsContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const NewsTitle = styled.h1`
  font-size: 2.5rem;
  text-align: justify;
  color: #333;
  margin-bottom: 20px;
`

export const NewsSubtitle = styled.h3`
  font-size: 1.5rem;
  text-align: justify;
  color: #555;
  margin-bottom: 10px;
`

export const NewsDate = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #888;
  margin-bottom: 10px;
`

export const NewsContent = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`

export const NewsImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  margin-bottom: 20px;
  object-fit: cover;
`

export const TopicsContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-top: 0;
  padding-top: 0;
`

export const TopicTitle = styled.h4`
  font-size: 1.4rem;
  text-align: justify;
  color: #333;
  margin-bottom: 15px;
`

export const TopicList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const TopicItem = styled.li`
  font-size: 1.1rem;
  color: #007bff;
  margin-bottom: 10px;
`

export const NewsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
