# API Routes

For now, only MVP routes, later we'll add more.

```
[x] GET /api/tasks - gets all tasks
[x] POST /api/tasks - create a new task
    {
      "text": string (len > 0, len <= 500),
      "monthly": boolean (default: false),
      "date" ?: date string or Date object,
    }

[x] GET /api/tasks/{id} - get a task by its ID
[x] POST /api/tasks/{id} - toggle a task's complete flag by its ID

[ ] GET /api/tasks/range?start=datestring&end=datestring - gets tasks within a range
```
