import FrontendLayout from "./layouts/layout";
import { CoursePrice } from "./data";
import OneOnOne from "./course-view/one-on-one";

export default function Show({ course }: { course: CoursePrice }) {

    return (
        <FrontendLayout>
          <OneOnOne course={course} />
        </FrontendLayout>
    )
}
