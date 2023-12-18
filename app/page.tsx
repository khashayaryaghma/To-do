import Form from "@/components/Form";
import { getData } from "@/utils/dataservices";

export default async function Home() {
  const tasks = await getData("http://localhost:8000/tasks")

  return (
    <main >
      <Form tasks={tasks}/>
    </main>
  )
}
