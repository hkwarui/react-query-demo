import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["users", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log({ user, courses });

  const coursesArray = courses?.data.courses;
  const dispalyCourses = (course) => {
    <div>{course}</div>;
  };
  console.log(coursesArray);

  return (
    <div>
      <h2>DependentQueriesPage</h2>
      {/* {coursesArray.forEach(dispalyCourses) */}
    </div>
  );
};
