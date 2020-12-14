const getForumHandler = async (req, res, user, { Channel }) => {
    try {
        const channels = await Channel.find();
        res.json(channels);
        res.setHeader("Content-Type", "application/json")
    } catch (e) {
        res.status(500).send("There was an issue getting the channels")
    }
};

const postForumHandler = async (req, res, user, { Channel }) => {
    const { name, description, private, members, creator } = req.body
    if (!name) {
        res.status(400).send("Must provide a name for the channel");
        return;
    }

    const createdAt = new Date();

    const channel = { 
        name: name,
        description: description,
        private: private,
        members: members,
        createdAt: createdAt,
        creator: creator
    }
    
    const query = new Channel(channel);
    query.save((err, newChannel) => {
        if (err) {
            res.status(500).send('Unable to create channel');
            return;
        }

        res.status(201).json(newChannel);
        res.setHeader("Content-Type", "application/json")
    })
};

const getForumIDHandler = async (req, res, user, { Channel, Message }) => {
    try {
        const channel = await Channel.find()
        if (channel.private && !channel.members.includes(user)) {
            res.status(403).send("User is forbidden")
            return
        } else if (req.params.id) {
            const messages = await Message
                .find({channelID: req.params.channelID, id: { $lt: req.params.id }})
                .sort({createdAt: -1})
                .limit(100);
            res.setHeader("Content-Type", "application/json");
            res.json(messages)
        } else {
            const messages = await Message
                .find({channelID: req.params.channelID})
                .sort({createdAt: -1})
                .limit(100);
            res.setHeader("Content-Type", "application/json");
            res.json(messages)
        }
    } catch (e) {
        res.status(500).send("There was an issue getting the specified channel")
    }
}

const postForumIDHandler = async (req, res, user, { Channel, Message }) => {
    const channel = await Channel.find();
    if (channel.private && !channel.members.includes(user)) {
        res.status(403).send("User is forbidden")
        return
    }
    const { body } = req.body
    const channelID = req.params.channelID
    const createdAt = new Date();

    const message = {
        channelID: channelID,
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

const deleteForumIDHandler = async (req, res, user, { Channel }) => {
    const channel = await Channel.find();
    if (channel.creator != user) {
        res.status(403).send("User is forbidden")
        return
    }

    channel.delete()
    res.send("Channel successfully deleted")
}