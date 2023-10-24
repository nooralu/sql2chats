import GridLayout from "react-grid-layout";
import { ChatWidget, IWidget, MapWidget } from "../widget";

type Config = {
  cols: number;
  rowHeight: number;
  width: number;
};

type Props = {
  layout: Pick<GridLayout.Layout, "i" | "x" | "y" | "w" | "h">[];
  widgets: IWidget[];
  config: Config;
  onLayoutChange: (newLayout: GridLayout.Layout[]) => void;
};

function Stage({ layout, widgets, config, onLayoutChange }: Props) {
  function generateDOM() {
    return layout.map((l) => {
      const widget = widgets.find((w) => w.id === l.i);
      if (widget) {
        const { type } = widget;
        let widgetComponent;
        switch (type) {
          case "chat":
            widgetComponent = <ChatWidget {...widget} />;
            break;
          case "map":
            widgetComponent = <MapWidget {...widget} />;
            break;
          default:
            widgetComponent = <div>Unknown widget type</div>;
        }
        return (
          <div
            key={l.i}
            className="backdrop-blur-md bg-white/30 shadow-md border rounded-md overflow-hidden p-2"
          >
            {widgetComponent}
          </div>
        );
      } else {
        return null;
      }
    });
  }

  return (
    <GridLayout
      className="w-full h-full"
      layout={layout}
      cols={config.cols}
      rowHeight={config.rowHeight}
      width={config.width}
      onLayoutChange={onLayoutChange}
    >
      {generateDOM()}
    </GridLayout>
  );
}

export default Stage;
