const getForumHandler = async (req, res, user, { Forum }) => {
    try {
        const forums = await Forum.find();
        res.json(forums);
        res.setHeader("Content-Type", "application/json")
    } catch (e) {
        res.status(500).send("There was an issue getting the forums")
    }
};

const postForumHandler = async (req, res, user, { Forum }) => {
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
            res.status(500).send('Unable to create forum');
            return;
        }

        res.status(201).json(newForum);
        res.setHeader("Content-Type", "application/json")
    })
};

const getForumIDHandler = async (req, res, user, { Forum, Message }) => {
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
        res.status(500).send("There was an issue getting the specified forum")
    }
}

const postForumIDHandler = async (req, res, user, { Forum, Message }) => {
    const { body } = req.body
    const forumID = req.params.forumID
    const createdAt = new Date();

    const message = {
        forumID: forumID,
        body: body,
        createdAt: createdAt,
        creator: user
    }

    const query = new Message(message)
    query.save((err, newMessage) => {
        if (err) {
            res.status(500).send('Unable to create message');
            return;
        }

        res.status(201).json(newMessage)
        res.setHeader("Content-Type", "application/json")
    })
}

const deleteForumIDHandler = async (req, res, user, { Forum }) => {
    const forum = await Forum.find();
    if (forum.creator != user) {
        res.status(403).send("User is forbidden")
        return
    }

    forum.delete()
    res.send("Forum successfully deleted")
}