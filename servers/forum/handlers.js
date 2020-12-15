const getForumHandler = async (req, res, { Forum }) => {
    try {
        const forums = await Forum.find();
        res.json(forums);
        res.setHeader("Content-Type", "application/json");
    } catch (e) {
        res.status(500);
        return;
    }
};

const postForumHandler = async (req, res, { Forum }) => {
    const { name, description, creator } = req.body
    if (!name) {
        res.status(400).send("Must provide a name for the forum");
        return;
    }

    const createdAt = new Date();

    const forum = { 
        name: name,
        description: description,
        createdAt: createdAt,
        creator: creator
    }
    
    const query = new Forum(forum);
    query.save((err, newForum) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.setHeader("Content-Type", "application/json");
        res.status(201).json(newForum);
    })
};

const getForumIDHandler = async (req, res, { Forum, Message }) => {
    try {
        if (req.params.id) {
            const messages = await Message
                .find({forumID: req.params.forumID, id: { $lt: req.params.id }})
                .sort({createdAt: -1})
                .limit(100);
            res.setHeader("Content-Type", "application/json");
            res.json(messages)
        } else {
            const messages = await Message
                .find({forumID: req.params.forumID})
                .sort({createdAt: -1})
                .limit(100);
            res.setHeader("Content-Type", "application/json");
            res.json(messages)
        }
    } catch (e) {
        res.status(500);
        return;
    }
}

const postForumIDHandler = async (req, res, { Forum, Message }) => {
    const { body } = req.body
    const forumID = req.params.forumID
    const createdAt = new Date();

    const message = {
        forumID: forumID,
        body: body,
        createdAt: createdAt,
    }

    const query = new Message(message)
    query.save((err, newMessage) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.status(201).json(newMessage)
        res.setHeader("Content-Type", "application/json")
    })
}

const deleteForumIDHandler = async (req, res, { Forum }) => {
    try {
        const forumID = req.params.forumID

        Forum.findByIdAndDelete(forumID, function(err, updatedForum) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.set("Content-Type", "text/plain")
            res.send("Forum successfully deleted");
        });
    } catch(e) {
        res.status(500);
        return;
    }
}

module.exports = {getForumHandler, postForumHandler, getForumIDHandler, postForumIDHandler, deleteForumIDHandler}