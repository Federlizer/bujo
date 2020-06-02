# Task
A task represents a task that you want to do. Basically, anything that you would
would like to accomplish throughout the day. For example, a task can be to throw
out the trash, or to call grandma or to buy something from the shop, work on a
project during the day.

### Parameters
**text** - A non-empty string value containing the name and/or description of
the task. Text can't be longer than 500 characters.

**date** - A date value representing the time the task is due to, unless the
*monthly* flag has been set, in which case, *date* represents the month the task
should be completed in.

**completed** - A boolean value representing if the task has been completed or
not.

**monthly** - A boolean value representing if the task is a monthly task. A
*monthly* task represents a task that's supposed to sit and remind the user for
something they have in mind untill the end of the month.
