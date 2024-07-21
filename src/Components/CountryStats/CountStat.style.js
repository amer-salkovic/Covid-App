import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: 700;
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #555;
`;

export const Select = styled.select`
  width: 40%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  appearance: none;
  cursor: pointer;
`;

export const DateInput = styled.input`
  width: 37%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ShowStats = styled.div`
  margin: 30px auto;
  width: 70%;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StatLabel = styled.div`
  font-weight: 600;
  color: #333;
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.color || "#444"};
`;
