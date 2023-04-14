function MessagesService() {
  const backendUrl = "http://localhost:3000";

  /*
    getMessages(senderId: string, receiverId: string) {
      return this.http.post<Array<any>>(this.backendUrl + '/messages',
      {
        senderId,
        receiverId
      });
    }

    postMessage(msg: string, senderId: string, receiverId: string) {
      return this.http.post<any>(this.backendUrl + '/singlemessage', {
        msg,
        senderId,
        receiverId
      });
    }

    getUsers() {
      return this.http.get<any>(this.backendUrl + '/users');
    }

    postLogin(user: any) {
      return this.http.post<any>(this.backendUrl + '/user/login', user);
    }

    postSignup(user: any) {
      return this.http.post<any>(this.backendUrl + '/user/signup', user);
    }

    */
}

export default MessagesService;
