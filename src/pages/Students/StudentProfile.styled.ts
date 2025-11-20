import styled from "styled-components";

export const ProfileWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InfoSection = styled.div`
  margin-top: 25px;
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
  margin-right: 5px;
`;

export const Tag = styled.span<{ color: string }>`
  display: inline-block;
  padding: 6px 12px;
  margin: 5px 5px 0 0;
  border-radius: 12px;
  font-size: 13px;
  color: white;
  background-color: ${({ color }) => color};
`;

//  student recommendation cards
export const RecommendationsWrapper = styled.div`
  margin-top: 40px;
`;

export const RecommendationsTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;

export const SmallCard = styled.div`
  min-width: 220px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  h4 {
    margin: 10px 0 5px;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
