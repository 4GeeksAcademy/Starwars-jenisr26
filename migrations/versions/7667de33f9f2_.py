"""empty message

Revision ID: 7667de33f9f2
Revises: 712bec4d5c72
Create Date: 2025-03-05 19:48:48.547951

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7667de33f9f2'
down_revision = '712bec4d5c72'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('planet_favorite', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'users', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('planet_favorite', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')

    # ### end Alembic commands ###
