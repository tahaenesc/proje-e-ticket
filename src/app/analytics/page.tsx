import Chart from "@/components/AnalyticsChart";

export default async function Analytics() {
  return (
    <>
      <div className="flex m-6 gap-[250px] ">
        <div className="justify-start ">
          <Chart />
          <h2 className="ml-28">DAİLY TASK</h2>
        </div>
        <div className="justify-center">
          <Chart />
          <h2 className="ml-28">DAİLY TİCKET</h2>
        </div>
        <div className="justify-end">
          <Chart />
          <h2 className="ml-28">DAILY ACTIVITIES</h2>
        </div>
      </div>
    </>
  );
}
