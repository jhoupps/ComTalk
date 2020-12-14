package users

import (
	"database/sql"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// Struct that represents a MySQL database store
type MySQLStore struct {
	database *sql.DB
}

// NewMySQLStore constructs and returns a new MySQLStore
func NewMySQLStore(db *sql.DB) *MySQLStore {
	return &MySQLStore{
		database: db,
	}
}

//GetByID returns the User with the given ID
func (mss *MySQLStore) GetByID(id int64) (*User, error) {
	//REALLY JANK AND BAD WORKAROUND FOR THE FACT THAT THE SESSIONS STORE THINKS THE FIRST ID IS ID 0 AND THE SQL ONE THINKS IT'S ID 1
	//id = id + 1
	//END REALLY BAD AND JANK WORKAROUND

	selectQuery := "select id,email,passHash,username,firstName,lastName,photoUrl from users where id=?"

	user := &User{}
	err := mss.database.QueryRow(selectQuery, id).Scan(&user.ID, &user.Email, &user.PassHash, &user.UserName,
		&user.FirstName, &user.LastName, &user.PhotoURL)

	if err != nil {
		return nil, err
	}

	return user, nil
}

//GetByEmail returns the User with the given email
func (mss *MySQLStore) GetByEmail(email string) (*User, error) {
	selectQuery := "select id,email,passHash,username,firstName,lastName,photoUrl from users where email=?"

	user := &User{}
	err := mss.database.QueryRow(selectQuery, email).Scan(&user.ID, &user.Email, &user.PassHash, &user.UserName,
		&user.FirstName, &user.LastName, &user.PhotoURL)
	if err != nil {
		return nil, err
	}

	return user, nil
}

//GetByUserName returns the User with the given Username
func (mss *MySQLStore) GetByUserName(username string) (*User, error) {
	selectQuery := "select id,email,passHash,username,firstName,lastName,photoUrl from users where username=?"

	user := &User{}
	err := mss.database.QueryRow(selectQuery, username).Scan(&user.ID, &user.Email, &user.PassHash, &user.UserName,
		&user.FirstName, &user.LastName, &user.PhotoURL)

	if err != nil {
		return nil, err
	}

	return user, nil
}

//Insert inserts the user into the database, and returns
//the newly-inserted User, complete with the DBMS-assigned ID
func (mss *MySQLStore) Insert(user *User) (*User, error) {
	insq := "insert into users(email, passhash, username, firstName, lastName, photoUrl) values (?,?,?,?,?,?)"
	res, errIns := mss.database.Exec(insq, user.Email, user.PassHash, user.UserName, user.FirstName, user.LastName, user.PhotoURL)
	if errIns != nil {
		return nil, errIns
	}

	id, _ := res.LastInsertId()
	user.ID = id
	return user, nil
}

//Update applies UserUpdates to the given user ID
//and returns the newly-updated user
func (mss *MySQLStore) Update(id int64, updates *Updates) (*User, error) {
	//REALLY JANK AND BAD WORKAROUND FOR THE FACT THAT THE SESSIONS STORE THINKS THE FIRST ID IS ID 0 AND THE SQL ONE THINKS IT'S ID 1
	//id = id + 1
	//END REALLY BAD AND JANK WORKAROUND

	update := "update users set firstName=?, lastName=? where id=?"
	_, errStmt := mss.database.Exec(update, updates.FirstName, updates.LastName, id)
	if errStmt != nil {
		log.Printf("Error in updating user: ", errStmt)
		return nil, errStmt
	}

	userDB, err := mss.GetByID(id)
	if err != nil {
		log.Printf("Error in fetching user: ", err)
		return nil, err
	}
	return userDB, nil
}

//Delete deletes the user with the given ID
func (mss *MySQLStore) Delete(id int64) error {
	//REALLY JANK AND BAD WORKAROUND FOR THE FACT THAT THE SESSIONS STORE THINKS THE FIRST ID IS ID 0 AND THE SQL ONE THINKS IT'S ID 1
	//id = id + 1
	//END REALLY BAD AND JANK WORKAROUND

	delete := "delete from users where id = ?"
	_, errStmt := mss.database.Exec(delete, id)
	if errStmt != nil {
		return errStmt
	}
	return nil
}

//Inserts a new row in signin table with the recently signed-in user.
func (mss *MySQLStore) SignIn(user *User, ipAddress string) error {
	insq := "insert into signin(userid, signinTime, ipaddress) values(?,?,?)"
	_, errIns := mss.database.Exec(insq, user.ID, time.Now(), ipAddress)
	if errIns != nil {
		return errIns
	}
	return nil
}
