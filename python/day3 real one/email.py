def emailComposer(email_subject, from_email, to_email, name, msg = "This is an email template"):
    email_template = "FROM: {}\nTO: {}\n\nHi, {}\n{}\nThanks".format(from_email, to_email, name, msg)
    with open(email_subject, "w") as email_file:
        email_file.write(email_template)