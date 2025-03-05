"""empty message

Revision ID: e20fb69a7623
Revises: 7667de33f9f2
Create Date: 2025-03-05 19:51:02.319864

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e20fb69a7623'
down_revision = '7667de33f9f2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('planet_favorite', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'planets', ['planet_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('planet_favorite', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')

    # ### end Alembic commands ###
