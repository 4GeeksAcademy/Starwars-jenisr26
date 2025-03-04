"""empty message

Revision ID: 021e79f2c807
Revises: 
Create Date: 2025-03-04 18:19:12.249081

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '021e79f2c807'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bill_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('price_per_unit', sa.Float(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('total_price', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('create_at', sa.DateTime(), nullable=False),
    sa.Column('total', sa.Float(), nullable=False),
    sa.Column('bill_address', sa.String(), nullable=True),
    sa.Column('status', sa.Enum('pending', 'paid', 'cancel', name='status'), nullable=False),
    sa.Column('payment', sa.Enum('visa', 'amex', 'paypal', name='payment'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('products')
    op.drop_table('followers')
    op.drop_table('bills')
    op.drop_table('bill_items')
    # ### end Alembic commands ###
