import { useState } from "react";
import { FloatButton } from "antd";
import GridLayout from "react-grid-layout";
import Stage from "../components/stage";
import AddForm from "../components/stage/AddForm";

function VisualizationPage() {
  const [widgets, setWidgets] = useState([
    {
      id: "a",
      payload: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      type: "chat",
    },
    {
      id: "b",
      payload: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      type: "chat",
    },
    {
      id: "c",
      payload: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      type: "chat",
    },
    {
      id: "d",
      payload: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      type: "chat",
    },
  ]);

  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
    { i: "d", x: 1, y: 1, w: 2, h: 1 },
  ]);

  const [openForm, setOpenForm] = useState(false);

  function handleLayoutChange(newLayout: GridLayout.Layout[]) {
    console.log(newLayout);
  }

  return (
    <div className="w-full h-full bg-slate-100 overflow-hidden">
      <FloatButton.Group shape="circle" style={{ right: 10 }}>
        <FloatButton description="新增" onClick={() => setOpenForm(true)} />
        <FloatButton description="背景" />
        <FloatButton description="预览" />
        <FloatButton description="保存" />
      </FloatButton.Group>
      <Stage
        widgets={widgets}
        layout={layout}
        config={{ cols: 3, rowHeight: 100, width: window.innerWidth - 200 }}
        onLayoutChange={handleLayoutChange}
      />
      <AddForm open={openForm} onClose={() => setOpenForm(false)}/>
    </div>
  );
}

export default VisualizationPage;