using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CloudPlanning_WebApi.Domains;

#nullable disable

namespace CloudPlanning_WebApi.Contexts
{
    public partial class CloudPlanningContext : DbContext
    {
        public CloudPlanningContext()
        {
        }

        public CloudPlanningContext(DbContextOptions<CloudPlanningContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Diagrama> Diagramas { get; set; }
        public virtual DbSet<Ec2> Ec2s { get; set; }
        public virtual DbSet<GrupoSeguranca> GrupoSegurancas { get; set; }
        public virtual DbSet<Rotum> Rota { get; set; }
        public virtual DbSet<Subnet> Subnets { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Vpc> Vpcs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=NOTE0113G2\\SQLEXPRESS; initial catalog=CloudPlanning; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Diagrama>(entity =>
            {
                entity.HasKey(e => e.IdDiagrama)
                    .HasName("PK__Diagrama__7232863824592B5F");

                entity.ToTable("Diagrama");

                entity.HasIndex(e => e.Nome, "UQ__Diagrama__6F71C0DC6DB4601E")
                    .IsUnique();

                entity.Property(e => e.IdDiagrama).HasColumnName("idDiagrama");

                entity.Property(e => e.IdEc2).HasColumnName("idEC2");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdEc2Navigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdEc2)
                    .HasConstraintName("FK__Diagrama__idEC2__37A5467C");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Diagrama__idUsua__36B12243");
            });

            modelBuilder.Entity<Ec2>(entity =>
            {
                entity.HasKey(e => e.IdEc2)
                    .HasName("PK__EC2__3F0898BDBB748AEC");

                entity.ToTable("EC2");

                entity.Property(e => e.IdEc2).HasColumnName("idEC2");

                entity.Property(e => e.Armazenamento).HasColumnName("armazenamento");

                entity.Property(e => e.AutoAssign)
                    .HasColumnName("autoAssign")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdVpc).HasColumnName("idVPC");

                entity.Property(e => e.ImagemComponente)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagemComponente");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.NomeChave)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeChave");

                entity.Property(e => e.QuantidadeProcessadores).HasColumnName("quantidadeProcessadores");

                entity.Property(e => e.Ram).HasColumnName("RAM");

                entity.Property(e => e.SistemaOperacional)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("sistemaOperacional");

                entity.Property(e => e.SubRede)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("subRede");

                entity.HasOne(d => d.IdVpcNavigation)
                    .WithMany(p => p.Ec2s)
                    .HasForeignKey(d => d.IdVpc)
                    .HasConstraintName("FK__EC2__idVPC__31EC6D26");
            });

            modelBuilder.Entity<GrupoSeguranca>(entity =>
            {
                entity.HasKey(e => e.IdGrupoSeguranca)
                    .HasName("PK__Grupo_Se__9ABDED6D1C35FF18");

                entity.ToTable("Grupo_Seguranca");

                entity.Property(e => e.IdGrupoSeguranca).HasColumnName("idGrupoSeguranca");

                entity.Property(e => e.CidrBlocksEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("cidr_blocks_egress");

                entity.Property(e => e.CidrBlocksIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("cidr_blocks_ingress");

                entity.Property(e => e.FromPortEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("from_port_egress");

                entity.Property(e => e.FromPortIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("from_port_ingress");

                entity.Property(e => e.NomeGrupoSeguranca)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.ProtocolEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("protocol_egress");

                entity.Property(e => e.ProtocolIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("protocol_ingress");

                entity.Property(e => e.ToPortEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("to_port_egress");

                entity.Property(e => e.ToPortIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("to_port_ingress");
            });

            modelBuilder.Entity<Rotum>(entity =>
            {
                entity.HasKey(e => e.IdRoute)
                    .HasName("PK__Rota__F6B8C6BB646AAF71");

                entity.Property(e => e.IdRoute).HasColumnName("idRoute");

                entity.Property(e => e.BlockIp)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("blockIp");

                entity.Property(e => e.IpDestino)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipDestino");

                entity.Property(e => e.IpOrigem)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipOrigem");

                entity.Property(e => e.NomeRoute)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeRoute");
            });

            modelBuilder.Entity<Subnet>(entity =>
            {
                entity.HasKey(e => e.IdSubnet)
                    .HasName("PK__Subnet__77ABF7FCF997F10F");

                entity.ToTable("Subnet");

                entity.Property(e => e.IdSubnet).HasColumnName("idSubnet");

                entity.Property(e => e.Acesso)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("acesso");

                entity.Property(e => e.Area)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("area");

                entity.Property(e => e.IpSubnet)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("ipSubnet");

                entity.Property(e => e.Mascara)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("mascara");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.SubRede)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("subRede");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__645723A6B3E0FB35");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E6164E2B1D03F")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.DataNascimento).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Imagem)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagem");

                entity.Property(e => e.Nome)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("senha");
            });

            modelBuilder.Entity<Vpc>(entity =>
            {
                entity.HasKey(e => e.IdVpc)
                    .HasName("PK__VPC__3D8E43C26972BC3C");

                entity.ToTable("VPC");

                entity.Property(e => e.IdVpc).HasColumnName("idVPC");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdGrupoSeguranca).HasColumnName("idGrupoSeguranca");

                entity.Property(e => e.IdRoute).HasColumnName("idRoute");

                entity.Property(e => e.IdSubnet).HasColumnName("idSubnet");

                entity.Property(e => e.ImagemComponente)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagemComponente");

                entity.Property(e => e.NatGateway)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("natGateway");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdGrupoSegurancaNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdGrupoSeguranca)
                    .HasConstraintName("FK__VPC__idGrupoSegu__2F10007B");

                entity.HasOne(d => d.IdRouteNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdRoute)
                    .HasConstraintName("FK__VPC__idRoute__2D27B809");

                entity.HasOne(d => d.IdSubnetNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdSubnet)
                    .HasConstraintName("FK__VPC__idSubnet__2E1BDC42");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
