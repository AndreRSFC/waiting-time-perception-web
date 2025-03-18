import styled from 'styled-components'

export const NewsContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`

export const NewsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`

export const NewsSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 10px;
`

export const NewsDate = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
`

export const NewsContent = styled.p`
  font-size: 1.2rem;
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
  margin-top: 30px;
`

export const TopicTitle = styled.h4`
  font-size: 1.4rem;
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

export const CommentSection = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #ccc;
`

export const CommentTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
`

export const Comment = styled.div`
  padding: 15px;
  background: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`

export const CommentUser = styled.h4`
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 5px;
`

export const CommentText = styled.p`
  font-size: 1rem;
  color: #444;
`

export const AddCommentButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`
