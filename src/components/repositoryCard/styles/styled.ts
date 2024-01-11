import styled from 'styled-components';


export const Card = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex: 0 0 60%;
  padding: 10px;
  border-radius: 6px;
  margin: 10px;
  justify-content: space-between;
`;

export const NameHeading = styled.h3`
  word-break: break-word;
`;

export const CardImage = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt
}))`
  width: inherit;
  height: 150px;
  border-radius: 4px;
`;

export const descriptionDiv = styled.div`
  text-align: left;
  margin-left: 10px;
  `
export const CheckboxDiv = styled.div`
  text-align: left;
  margin-bottom: 4px;
  min-width: 10px;
`;