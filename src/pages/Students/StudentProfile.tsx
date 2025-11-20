import { Avatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { students } from "./StudentsPage";
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

const getTagColor = (type: "canTeach" | "wantsToLearn") =>
  type === "canTeach" ? "#4CAF50" : "#2196F3";

const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === Number(id));
  if (!student) return <p>Student not found</p>;
  const onBack = () => navigate("/students");
  const recommendations = students.filter(
    (s) =>
      s.id !== student.id &&
      s.canTeach.toLowerCase().includes(student.wantsToLearn.toLowerCase())
  );

  return (
    <ProfileWrapper>
      <BackButton onClick={onBack}>← Back to Students</BackButton>
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
      {/* --- Recommendations Section --- */}
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

export default StudentProfile;
