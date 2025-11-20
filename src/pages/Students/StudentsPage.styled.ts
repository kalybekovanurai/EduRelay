import styled from "styled-components";

export const StudentsWrapper = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 380px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  margin-bottom: 25px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(50, 115, 245, 0.15);
  }
`;

export const StudentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

export const StudentCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const Major = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Skills = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  line-height: 1.5;
`;

export const PaginationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  button {
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
