# Architecture

### Controller layer
So far, the idea is the following; controllers in the middle that have complete
control over what's going on. The business logic (BL) is contained there. The DB
connection is made there as well, currently thorugh Sequelize. The models are
made separately, which means that the controllers must make the transition
between the two, since the express layer will be using the general models. The
reason for two model layers is to do with the idea to keep the exposing layer
from being dependable on the db layer. Since Sequelize uses "personalized"
models, if those models are exposed to the express layer, code change will have
to occur in there as well. Having two layers of models makes it possible to
refactor the DB layer without having to worry about the express layer.

### Express layer
An expressjs application. Has private architecture consisting of three parts;
*the routes*, separated in directories and files, that are combined at the top of
the hierarchy in an index.ts file. The application can then import that file and
have full access to the routes configuration.
*the route controllers*, separated by functionality. Usually, one route uses one
controller, but that's not a necessity.
*input validators*, in their own directory, separated by functionality. Used to
validate the data in incoming requests. Library *fill me in* is used.
*the application*, a single file that figures out configuration for the express
application and imports routes. Exporting the application from that file is
required.

### Sequelize
Models configuration and setup is done in this layer. Basically, model schemas
are created and then exported to be used by the controllers. Each table has a
model.
