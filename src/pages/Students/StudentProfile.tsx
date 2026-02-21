import { Avatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  BackButton,
  Header,
  InfoSection,
  ProfileWrapper,
  Label,
  Tag,
  RecommendationsWrapper,
  RecommendationsTitle,
  ScrollContainer,
  SmallCard,
} from "./StudentProfile.styled";
import { getStudentByIdThunk } from "../../stores/slices/OneStudent/studentThunk";
import { LoadingPage } from "../../utils/loadingPage/LoadingPage";

const getTagColor = (type: "canTeach" | "wantsToLearn") =>
  type === "canTeach" ? "#4CAF50" : "#2196F3";

export const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { student, students } = useAppSelector((state) => state.student);

  useEffect(() => {
    if (id) {
      dispatch(getStudentByIdThunk(Number(id)));
    }
  }, [id, dispatch]);

  if (!student) return <LoadingPage/>;

  const recommendations = students.filter(
    (s) =>
      s.id !== student.id &&
      s.canTeach.toLowerCase().includes(student.wantsToLearn.toLowerCase()),
  );

  return (
    <ProfileWrapper>
      <BackButton onClick={() => navigate("/students")}>
        ← Back to Students
      </BackButton>

      <Header>
        <Avatar src={student.avatar} style={{ width: 100, height: 100 }} />
        <div>
          <h2>{student.name}</h2>
          <p>
            {student.major} — {student.faculty}
          </p>
        </div>
      </Header>

      <InfoSection>
        <Label>Skills:</Label>
        <p>{student.skills}</p>
      </InfoSection>

      <InfoSection>
        <Label>Can Teach:</Label>
        <Tag color={getTagColor("canTeach")}>{student.canTeach}</Tag>
      </InfoSection>

      <InfoSection>
        <Label>Wants to Learn:</Label>
        <Tag color={getTagColor("wantsToLearn")}>{student.wantsToLearn}</Tag>
      </InfoSection>

      <InfoSection>
        <Label>Contacts:</Label>
        <p>{student.contacts}</p>
      </InfoSection>

      {recommendations.length > 0 && (
        <RecommendationsWrapper>
          <RecommendationsTitle>
            Students who can teach what {student.name} wants to learn
          </RecommendationsTitle>

          <ScrollContainer>
            {recommendations.map((rec) => (
              <SmallCard
                key={rec.id}
                onClick={() => navigate(`/students/${rec.id}`)}
              >
                <Avatar src={rec.avatar} style={{ width: 60, height: 60 }} />
                <h4>{rec.name}</h4>
                <p>
                  <strong>Can Teach:</strong> {rec.canTeach}
                </p>
              </SmallCard>
            ))}
          </ScrollContainer>
        </RecommendationsWrapper>
      )}
    </ProfileWrapper>
  );
};