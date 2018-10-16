//Debug only; need to make args required
module.exports = {
    elasticHost: 'http://localhost',
    port: '9200',
    exampleSchema: require('./example-schema'),
    recordCount: 100,
	index: 'deleteme',
	auth: {
		type: 'JWT',
		token: "eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzowY2RiNmM3NC1jZGQxLTQ5NWQtYTIyOS1kNDY4ZTU2ZjhhYzciLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJjb21wb3NlLWNsaWVudCIsImV4cCI6MTUzOTM4Mzg1OSwiaWF0IjoxNTM5MzgwMjU5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQ0NDQvIiwianRpIjoiZTEwMmY4YTgtOTUzMy00Mzc5LTk3ZGYtYzVjZTdiMGQ1M2QxIiwibmJmIjoxNTM5MzgwMjU5LCJzY3AiOltdLCJzdWIiOiJjb21wb3NlLWNsaWVudCJ9.Z2iXTs2ad3YOTv1pQrIQPdNTxvx8cbZSHLd_htdZWy3-5GnceggkgYCjZurdnWNSsNWbwYsFA31i2Rtxvxb_mXey8pb2l38HSZ9hvCcCl8LjdcVPf17Z_30ELgFPs1IGb8Jm1y_77d3kuOu9P-Tf8v9z9b8oZMUJaqUaWi1QCju4sMv4zS8FRLl_pZUqr75P2s7Q55NipNr8TDOvVV5OjRMqNlrxCYI7l0nEOkjY-BoMpdmVH_rqqVMRtMahNaMWfHQawqmhLEQp5I6nxXTy4JGXBZ_VHcj61-8LdxjkN8pS3dJA5Z3kpEDCVS67CBhAN7106T1gGLflfQlTS_rRS5YJpyNoDbePFp6wHvQBU5B7Gt5oSnzG5FLA4qWttEo5QZJOUmlF50sNmrlhTQkF2S81X7KtOM7ZqP1vlgmKtN6YsJDESKrI-F54jp-nWzDMWCna8vF_5gU2DKlh2d66JTpBEgejSgO8ZRHXNnvGS6hzVURX_Vf68v3yur_LyCNPJkjkdCJFfD3lfeG7wJeL4qLN1I_0hAo5BG4Mzhlgrhnb25lLPAZ6TPV27W9fXqCTwhJy3gEu490-0B3Nm8ULEoPfAdEsvB-6yQLc_Gq9BKHFM6swg_pYEjAaQZKmqFBiqfyZLgCFj7TY26KEhQKQddNPkTQbRSEFHszxxnXVL-g"
	}
};
