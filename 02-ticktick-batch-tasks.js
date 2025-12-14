/**
 * TickTick 批量添加任务脚本
 * 使用方法：在浏览器控制台中执行，或作为书签脚本运行
 *
 * 参考文档：https://help.dida365.com/articles/7119949066221387776#url-scheme
 */
(function () {
  const tasks = [
    {
      title: "任务一：准备工作",
      start: "2025-12-14T22:00:00.000",
      end: "2025-12-15T00:00:00.000",
    },
    {
      title: "任务二：上午事项",
      start: "2025-12-15T19:00:00.000",
      end: "2025-12-15T22:30:00.000",
    },
    {
      title: "任务三：晚间处理",
      start: "2025-12-15T22:30:00.000",
      end: "2025-12-16T05:00:00.000",
    },
    {
      title: "任务四：午休跟进",
      start: "2025-12-16T12:00:00.000",
      end: "2025-12-16T14:00:00.000",
    },
    {
      title: "任务五：确认与检查",
      start: "2025-12-17T07:30:00.000",
      end: "2025-12-17T08:30:00.000",
    },
  ];

  tasks.forEach((task, index) => {
    const url =
      "ticktick://x-callback-url/v1/add_task" +
      "?title=" +
      encodeURIComponent(task.title) +
      "&startDate=" +
      task.start +
      "&endDate=" +
      task.end +
      "&allDay=false" +
      "&x-success=ticktick";

    setTimeout(() => {
      console.log(`[${index + 1}/${tasks.length}] 添加任务: ${task.title}`);
      window.open(url, "_blank");
    }, index * 800);
  });

  console.log(`共 ${tasks.length} 个任务，将在 ${(tasks.length * 0.8).toFixed(1)} 秒内完成`);
})();
