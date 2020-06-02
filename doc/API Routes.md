# API Routes

For now, only MVP routes, later we'll add more.

```
[ ] GET /api/tasks - gets all tasks
[ ] POST /api/tasks - create a new task
    {
      "text": string (len > 0, len <= 500),
      "monthly": boolean (default: false),
      "date" ?: date string or Date object,
    }

[ ] GET /api/tasks/{id} - get a task by its ID
[ ] POST /api/tasks/{id} - complete a task by its ID

[ ] GET /api/tasks/range?start=datestring&end=datestring - gets tasks within a range
```
