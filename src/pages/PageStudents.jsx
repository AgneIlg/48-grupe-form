import { StudentsNoData } from "../components/students/StudentsNoData";

export function PageStudents() {
    return (
        <>
            <h1 className="page-title">Students</h1>
            <p className="page-description">Students attending this class:</p>
            <div>Could not find students data</div>
            <StudentsNoData/>
            <StudentList/>
        </>
    )
}