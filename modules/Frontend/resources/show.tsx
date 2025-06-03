import FrontendLayout from "./layouts/layout";
import { CourseInstructor } from "./data";
import OneOnOne from "./course-view/one-on-one";

export default function Show({ course }: { course: CourseInstructor }) {

    return (
        <FrontendLayout>
          <OneOnOne course={course} />
        </FrontendLayout>
    )
}
