from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError
from app.models import User


class RegisterForm(FlaskForm):
    """Form for user registration.

    This form includes fields for username, email address, password, and password confirmation.
    It also provides validation methods to check if the entered username and email address
    already exist in the database.

    Attributes:
        username (StringField): Field for entering the desired username.
        email_address (StringField): Field for entering the email address.
        password1 (PasswordField): Field for entering the password.
        password2 (PasswordField): Field for confirming the password.
        submit (SubmitField): Button to submit the registration form.

    Methods:
        validate_username(username_to_check): Validates if the provided username already exists.
        validate_email_address(email_address_to_check): Validates if the provided email address already exists.
    """

    # Handling existing username error
    # Flask Forms will automatically execute our validate_x() functions; we must make sure x is a form field.

    def validate_username(self, username_to_check):
        """
        Validate if the provided username already exists in the database.

        Args:
            username_to_check (str): The username to be checked.

        Raises:
            ValidationError: If the username already exists in the database.
        """

        user = User.query.filter_by(username=username_to_check.data).first()
        if user:
            raise ValidationError(
                "Username already exists! Please try a different username"
            )

    # Handling email address already exists
    def validate_email_address(self, email_address_to_check):
        """
        Validate if the provided email address already exists in the database.

        Args:
            email_address_to_check (str): The email address to be checked.

        Raises:
            ValidationError: If the email address already exists in the database.
        """
        email_address = User.query.filter_by(
            email_address=email_address_to_check.data
        ).first()
        if email_address:
            raise ValidationError(
                "Email Address already exists! Please try a different email address"
            )

    username = StringField(
        label="User Name:", validators=[Length(min=2, max=30), DataRequired()]
    )
    email_address = StringField(
        label="Email Address:", validators=[Email(), DataRequired()]
    )
    password1 = PasswordField(
        label="Password:", validators=[Length(min=6), DataRequired()]
    )
    password2 = PasswordField(
        label="Confirm Password:", validators=[EqualTo("password1"), DataRequired()]
    )
    submit = SubmitField(label="Create Account")


class LoginForm(FlaskForm):
    username = StringField(label="User Name:", validators=[DataRequired()])
    password = PasswordField(label="Password:", validators=[DataRequired()])
    submit = SubmitField(label="Sign in")

class PurchaseForm(FlaskForm):
    submit = SubmitField(label="Purchase Item")

class SellItemForm(FlaskForm):
    submit = SubmitField(label="Sell Item")